"""
Backend API Tests for 24x7 Solution Marketing Agency Website
Tests: /api/, /api/contact, /api/audit, /api/newsletter, /api/leads, /api/newsletter/subscribers
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoint:
    """Test API root health check"""
    
    def test_api_root_returns_live_status(self):
        """Verify API root returns live status"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "live"
        assert data["message"] == "24x7 Solution API"
        print("✓ API root health check passed")


class TestContactEndpoint:
    """Test /api/contact endpoint for contact form submissions"""
    
    def test_contact_submission_success(self):
        """Test successful contact form submission"""
        test_email = f"TEST_contact_{uuid.uuid4().hex[:8]}@example.com"
        payload = {
            "name": "Test User",
            "email": test_email,
            "company": "Test Company Inc",
            "website": "https://testcompany.com",
            "country": "USA",
            "budget": "$5K-$15K",
            "services": ["Paid Social", "Google Ads"],
            "message": "This is a test message"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
        print(f"✓ Contact submission successful for {test_email}")
        
        # Verify data persisted by checking leads endpoint
        leads_response = requests.get(f"{BASE_URL}/api/leads")
        assert leads_response.status_code == 200
        leads_data = leads_response.json()
        
        # Find our test submission
        found = any(lead.get("email") == test_email for lead in leads_data.get("leads", []))
        assert found, f"Contact submission not found in leads for {test_email}"
        print(f"✓ Contact data persisted and verified in /api/leads")
    
    def test_contact_submission_minimal_required_fields(self):
        """Test contact submission with only required fields"""
        test_email = f"TEST_minimal_{uuid.uuid4().hex[:8]}@example.com"
        payload = {
            "name": "Minimal Test",
            "email": test_email,
            "company": "Minimal Co",
            "country": "UK",
            "budget": "$1K-$5K",
            "services": ["SEO"]
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        print("✓ Contact submission with minimal fields passed")
    
    def test_contact_submission_missing_required_field(self):
        """Test contact submission fails without required fields"""
        payload = {
            "name": "Test User",
            # Missing email
            "company": "Test Company",
            "country": "USA",
            "budget": "$5K-$15K",
            "services": ["Paid Social"]
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should return 422 for validation error
        assert response.status_code == 422
        print("✓ Contact submission correctly rejects missing required fields")


class TestAuditEndpoint:
    """Test /api/audit endpoint for free audit form submissions"""
    
    def test_audit_submission_success(self):
        """Test successful audit form submission"""
        test_email = f"TEST_audit_{uuid.uuid4().hex[:8]}@example.com"
        payload = {
            "name": "Audit Test User",
            "email": test_email,
            "website": "https://auditsite.com",
            "spend": "$5K-$20K",
            "country": "Australia"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/audit",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
        print(f"✓ Audit submission successful for {test_email}")
        
        # Verify data persisted
        leads_response = requests.get(f"{BASE_URL}/api/leads")
        assert leads_response.status_code == 200
        leads_data = leads_response.json()
        
        found = any(lead.get("email") == test_email and lead.get("source") == "free_audit" 
                   for lead in leads_data.get("leads", []))
        assert found, f"Audit submission not found in leads for {test_email}"
        print(f"✓ Audit data persisted and verified in /api/leads")
    
    def test_audit_submission_missing_website(self):
        """Test audit submission fails without website"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            # Missing website
            "spend": "$5K-$20K",
            "country": "USA"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/audit",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 422
        print("✓ Audit submission correctly rejects missing website")


class TestNewsletterEndpoint:
    """Test /api/newsletter endpoint for newsletter subscriptions"""
    
    def test_newsletter_subscription_success(self):
        """Test successful newsletter subscription"""
        test_email = f"TEST_newsletter_{uuid.uuid4().hex[:8]}@example.com"
        payload = {"email": test_email}
        
        response = requests.post(
            f"{BASE_URL}/api/newsletter",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        print(f"✓ Newsletter subscription successful for {test_email}")
        
        # Verify data persisted
        subs_response = requests.get(f"{BASE_URL}/api/newsletter/subscribers")
        assert subs_response.status_code == 200
        subs_data = subs_response.json()
        
        found = any(sub.get("email") == test_email for sub in subs_data.get("subscribers", []))
        assert found, f"Newsletter subscription not found for {test_email}"
        print(f"✓ Newsletter subscription persisted and verified")
    
    def test_newsletter_subscription_missing_email(self):
        """Test newsletter subscription fails without email"""
        payload = {}
        
        response = requests.post(
            f"{BASE_URL}/api/newsletter",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 422
        print("✓ Newsletter subscription correctly rejects missing email")


class TestLeadsEndpoint:
    """Test /api/leads endpoint for retrieving all leads"""
    
    def test_get_leads_returns_list(self):
        """Test leads endpoint returns list of leads"""
        response = requests.get(f"{BASE_URL}/api/leads")
        
        assert response.status_code == 200
        data = response.json()
        assert "leads" in data
        assert "total" in data
        assert isinstance(data["leads"], list)
        assert isinstance(data["total"], int)
        print(f"✓ Leads endpoint returned {data['total']} leads")


class TestNewsletterSubscribersEndpoint:
    """Test /api/newsletter/subscribers endpoint"""
    
    def test_get_subscribers_returns_list(self):
        """Test subscribers endpoint returns list"""
        response = requests.get(f"{BASE_URL}/api/newsletter/subscribers")
        
        assert response.status_code == 200
        data = response.json()
        assert "subscribers" in data
        assert "total" in data
        assert isinstance(data["subscribers"], list)
        print(f"✓ Newsletter subscribers endpoint returned {data['total']} subscribers")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
