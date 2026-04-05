import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, Users, FileText, Mail } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="p-5 rounded-xl bg-brand-surface border border-brand-border">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={18} />
        </div>
        <div>
          <span className="font-mono font-700 text-2xl text-brand-text">{value}</span>
          <p className="text-xs text-brand-muted">{label}</p>
        </div>
      </div>
    </div>
  );
}

function LeadRow({ lead }) {
  const date = lead.created_at || lead.subscribed_at || '';
  const formatted = date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
  const type = lead.source === 'contact_form' ? 'Contact' : lead.source === 'free_audit' ? 'Audit' : 'Newsletter';
  const typeColor = lead.source === 'contact_form' ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' : lead.source === 'free_audit' ? 'bg-brand-mint/10 text-brand-mint border-brand-mint/20' : 'bg-purple-500/10 text-purple-400 border-purple-500/20';

  return (
    <tr className="border-b border-brand-border/50 hover:bg-brand-surface/50 transition-colors">
      <td className="py-3 px-4 text-sm text-brand-text">{lead.name || '-'}</td>
      <td className="py-3 px-4 text-sm text-brand-muted">{lead.email || '-'}</td>
      <td className="py-3 px-4 text-sm text-brand-muted hidden md:table-cell">{lead.company || '-'}</td>
      <td className="py-3 px-4 text-sm text-brand-muted hidden lg:table-cell">{lead.country || '-'}</td>
      <td className="py-3 px-4 text-sm text-brand-muted hidden lg:table-cell">{lead.budget || lead.spend || '-'}</td>
      <td className="py-3 px-4 text-sm text-brand-muted hidden sm:table-cell">{formatted}</td>
      <td className="py-3 px-4">
        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${typeColor}`}>{type}</span>
      </td>
    </tr>
  );
}

export default function AdminPage() {
  const [leads, setLeads] = useState([]);
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('desc');

  useEffect(() => {
    async function load() {
      try {
        const [leadsRes, subsRes] = await Promise.all([
          fetch(`${API_URL}/api/leads`).then(r => r.json()),
          fetch(`${API_URL}/api/newsletter/subscribers`).then(r => r.json()),
        ]);
        setLeads(leadsRes.leads || []);
        setSubs(subsRes.subscribers || []);
      } catch (e) {
        console.error('Failed to load data', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const sortedLeads = [...leads].sort((a, b) => {
    const da = new Date(a.created_at || 0);
    const db = new Date(b.created_at || 0);
    return sort === 'desc' ? db - da : da - db;
  });

  const contactCount = leads.filter(l => l.source === 'contact_form').length;
  const auditCount = leads.filter(l => l.source === 'free_audit').length;

  return (
    <>
      <Helmet><title>Admin Dashboard | 24x7 Solution</title></Helmet>
      <div className="pt-20 min-h-screen" data-testid="admin-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-brand-mint font-mono text-sm tracking-widest uppercase">Dashboard</p>
                <h1 className="font-display font-800 text-3xl text-brand-text">Lead Management</h1>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-brand-mint">
                <span className="w-1.5 h-1.5 bg-brand-mint rounded-full animate-pulse-live" />
                Live
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <StatCard icon={Users} label="Contact Leads" value={contactCount} color="bg-brand-blue/10 text-brand-blue" />
            <StatCard icon={FileText} label="Audit Requests" value={auditCount} color="bg-brand-mint/10 text-brand-mint" />
            <StatCard icon={Mail} label="Newsletter Subscribers" value={subs.length} color="bg-purple-500/10 text-purple-400" />
          </div>

          <div className="rounded-xl bg-brand-surface border border-brand-border overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
              <h2 className="font-display font-600 text-brand-text text-sm">All Submissions ({leads.length})</h2>
              <button onClick={() => setSort(s => s === 'desc' ? 'asc' : 'desc')} data-testid="sort-toggle" className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-mint transition-colors">
                Date {sort === 'desc' ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
              </button>
            </div>
            {loading ? (
              <div className="p-10 text-center text-brand-muted text-sm">Loading...</div>
            ) : sortedLeads.length === 0 ? (
              <div className="p-10 text-center text-brand-muted text-sm">No submissions yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full" data-testid="leads-table">
                  <thead>
                    <tr className="border-b border-brand-border bg-brand-bg/50">
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted">Name</th>
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted">Email</th>
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted hidden md:table-cell">Company</th>
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted hidden lg:table-cell">Country</th>
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted hidden lg:table-cell">Budget</th>
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted hidden sm:table-cell">Date</th>
                      <th className="py-2.5 px-4 text-left text-xs font-display font-600 text-brand-muted">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedLeads.map((lead) => <LeadRow key={lead.id} lead={lead} />)}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
