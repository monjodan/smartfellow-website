(function () {
  'use strict';

  if (window.__SF_MODAL_LOADED__) return;
  window.__SF_MODAL_LOADED__ = true;

  var CSS = [
    '.sf-modal-overlay {',
    '  position: fixed;',
    '  inset: 0;',
    '  background: rgba(17, 24, 28, 0.52);',
    '  backdrop-filter: blur(2px);',
    '  -webkit-backdrop-filter: blur(2px);',
    '  z-index: 9998;',
    '  display: none;',
    '  opacity: 0;',
    '  transition: opacity 0.22s ease;',
    '}',
    '.sf-modal-overlay.is-open { display: block; opacity: 1; }',
    '',
    '.sf-modal-shell {',
    '  position: fixed;',
    '  inset: 0;',
    '  z-index: 9999;',
    '  display: none;',
    '  align-items: flex-start;',
    '  justify-content: center;',
    '  padding: 4vh 1.25rem;',
    '  overflow-y: auto;',
    '  -webkit-overflow-scrolling: touch;',
    '}',
    '.sf-modal-shell.is-open { display: flex; }',
    '',
    '.sf-modal-dialog {',
    '  background: var(--paper, #fbf9f4);',
    '  color: var(--ink, #1f2225);',
    '  border: 1px solid var(--line, #e4e1d9);',
    '  border-radius: var(--radius, 14px);',
    '  box-shadow: 0 30px 80px rgba(12, 16, 18, 0.28);',
    '  width: 100%;',
    '  max-width: 760px;',
    '  margin: auto;',
    '  padding: 2rem clamp(1.5rem, 3.2vw, 2.6rem) 2.2rem;',
    '  position: relative;',
    '  transform: translateY(16px);',
    '  opacity: 0;',
    '  transition: opacity 0.22s ease, transform 0.22s ease;',
    '}',
    '.sf-modal-shell.is-open .sf-modal-dialog {',
    '  opacity: 1;',
    '  transform: translateY(0);',
    '}',
    '',
    '.sf-modal-header {',
    '  display: flex;',
    '  align-items: flex-start;',
    '  justify-content: space-between;',
    '  gap: 1rem;',
    '  margin-bottom: 0.5rem;',
    '}',
    '',
    '.sf-modal-eyebrow {',
    '  display: block;',
    '  font-size: 11px;',
    '  font-weight: 600;',
    '  letter-spacing: 0.12em;',
    '  text-transform: uppercase;',
    '  color: var(--ink-faint, #8b8a83);',
    '  margin-bottom: 0.55rem;',
    '}',
    '',
    '.sf-modal-title {',
    '  font-family: Georgia, "Times New Roman", serif;',
    '  font-weight: 400;',
    '  font-size: clamp(1.5rem, 2.6vw, 1.9rem);',
    '  line-height: 1.2;',
    '  letter-spacing: -0.01em;',
    '  margin: 0;',
    '  color: var(--ink, #1f2225);',
    '}',
    '.sf-modal-title em { font-style: italic; color: var(--accent, #1b4d3e); }',
    '',
    '.sf-modal-lede {',
    '  margin: 0.75rem 0 1.25rem;',
    '  color: var(--ink-soft, #4a4d50);',
    '  font-size: 0.95rem;',
    '  line-height: 1.6;',
    '  max-width: 60ch;',
    '}',
    '',
    '.sf-modal-close {',
    '  flex: 0 0 auto;',
    '  width: 34px;',
    '  height: 34px;',
    '  border-radius: 50%;',
    '  border: 1px solid var(--line, #e4e1d9);',
    '  background: var(--surface, #f1eee6);',
    '  color: var(--ink-soft, #4a4d50);',
    '  font-size: 1.1rem;',
    '  line-height: 1;',
    '  cursor: pointer;',
    '  display: inline-flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  padding: 0;',
    '  transition: background 0.15s ease, color 0.15s ease;',
    '}',
    '.sf-modal-close:hover { background: var(--ink, #1f2225); color: var(--paper, #fbf9f4); border-color: var(--ink, #1f2225); }',
    '',
    '.sf-modal-meta {',
    '  display: grid;',
    '  grid-template-columns: repeat(3, 1fr);',
    '  gap: 0.4rem;',
    '  margin: 0.2rem 0 1.5rem;',
    '  padding: 0.85rem 1rem;',
    '  background: var(--surface, #f1eee6);',
    '  border: 1px solid var(--line, #e4e1d9);',
    '  border-radius: var(--radius-sm, 8px);',
    '  font-size: 0.78rem;',
    '}',
    '.sf-modal-meta-item {',
    '  display: flex;',
    '  flex-direction: column;',
    '}',
    '.sf-modal-meta-label {',
    '  font-size: 10px;',
    '  letter-spacing: 0.08em;',
    '  text-transform: uppercase;',
    '  color: var(--ink-faint, #8b8a83);',
    '  margin-bottom: 0.15rem;',
    '}',
    '.sf-modal-meta-value {',
    '  font-size: 0.82rem;',
    '  color: var(--ink, #1f2225);',
    '  font-weight: 500;',
    '}',
    '',
    '.sf-modal-form-grid {',
    '  display: grid;',
    '  grid-template-columns: 1fr 1fr;',
    '  gap: 0.9rem 1rem;',
    '}',
    '.sf-modal-form-grid .sf-field-full { grid-column: 1 / -1; }',
    '',
    '.sf-field label {',
    '  display: block;',
    '  font-size: 0.8rem;',
    '  font-weight: 600;',
    '  color: var(--ink, #1f2225);',
    '  margin-bottom: 0.35rem;',
    '}',
    '.sf-field .sf-hint {',
    '  display: block;',
    '  font-size: 11px;',
    '  color: var(--ink-faint, #8b8a83);',
    '  margin-top: 0.25rem;',
    '}',
    '.sf-field input[type="text"],',
    '.sf-field input[type="email"],',
    '.sf-field select,',
    '.sf-field textarea {',
    '  width: 100%;',
    '  padding: 0.6rem 0.75rem;',
    '  background: var(--paper, #fbf9f4);',
    '  border: 1px solid var(--line, #e4e1d9);',
    '  border-radius: var(--radius-sm, 8px);',
    '  color: var(--ink, #1f2225);',
    '  font-size: 0.92rem;',
    '  font-family: inherit;',
    '}',
    '.sf-field input:focus,',
    '.sf-field select:focus,',
    '.sf-field textarea:focus {',
    '  outline: none;',
    '  border-color: var(--accent, #1b4d3e);',
    '}',
    '.sf-field textarea { min-height: 90px; resize: vertical; line-height: 1.5; }',
    '',
    '.sf-checkboxes {',
    '  display: grid;',
    '  grid-template-columns: 1fr 1fr;',
    '  gap: 0.35rem 0.8rem;',
    '}',
    '.sf-checkboxes label {',
    '  display: flex;',
    '  gap: 0.45rem;',
    '  align-items: center;',
    '  font-size: 0.88rem;',
    '  font-weight: 400;',
    '  color: var(--ink-soft, #4a4d50);',
    '  margin-bottom: 0;',
    '}',
    '.sf-checkboxes input[type="checkbox"] { accent-color: var(--accent, #1b4d3e); }',
    '',
    '.sf-submit-row {',
    '  margin-top: 1.5rem;',
    '  display: flex;',
    '  gap: 0.8rem;',
    '  align-items: center;',
    '  flex-wrap: wrap;',
    '}',
    '.sf-submit-row .sf-submit-note {',
    '  font-size: 11px;',
    '  color: var(--ink-faint, #8b8a83);',
    '  letter-spacing: 0.05em;',
    '}',
    '.sf-submit-btn {',
    '  border: 0;',
    '  padding: 0.7rem 1.4rem;',
    '  background: var(--ink, #1f2225);',
    '  color: var(--paper, #fbf9f4);',
    '  font-family: inherit;',
    '  font-size: 0.9rem;',
    '  font-weight: 500;',
    '  letter-spacing: 0.01em;',
    '  border-radius: var(--radius-sm, 8px);',
    '  cursor: pointer;',
    '  transition: background 0.15s ease;',
    '}',
    '.sf-submit-btn:hover { background: var(--accent, #1b4d3e); }',
    '',
    '.sf-modal-form[data-state="sending"] .sf-modal-form-grid,',
    '.sf-modal-form[data-state="sending"] .sf-submit-row { opacity: 0.55; pointer-events: none; }',
    '',
    '.sf-form-error {',
    '  display: none;',
    '  margin-top: 1rem;',
    '  padding: 0.7rem 0.95rem;',
    '  border-radius: var(--radius-sm, 8px);',
    '  font-size: 0.9rem;',
    '  line-height: 1.5;',
    '  background: rgba(201, 62, 62, 0.08);',
    '  color: #8a2e2e;',
    '}',
    '.sf-modal-form[data-state="error"] .sf-form-error { display: block; }',
    '.sf-form-error a { color: inherit; text-decoration: underline; }',
    '',
    '.sf-modal-success { display: none; text-align: left; }',
    '.sf-modal-success.is-visible { display: block; }',
    '.sf-modal-success h3 {',
    '  font-family: Georgia, "Times New Roman", serif;',
    '  font-weight: 400;',
    '  font-size: clamp(1.4rem, 2.4vw, 1.8rem);',
    '  line-height: 1.25;',
    '  margin: 0 0 0.75rem;',
    '  color: var(--ink, #1f2225);',
    '}',
    '.sf-modal-success h3 em { font-style: italic; color: var(--accent, #1b4d3e); }',
    '.sf-modal-success p {',
    '  color: var(--ink-soft, #4a4d50);',
    '  line-height: 1.6;',
    '  margin: 0 0 1.4rem;',
    '}',
    '.sf-modal-success-actions { display: flex; gap: 0.9rem; flex-wrap: wrap; align-items: center; }',
    '.sf-modal-success-note { font-size: 11px; color: var(--ink-faint, #8b8a83); letter-spacing: 0.05em; text-transform: uppercase; }',
    '.sf-modal-success-btn {',
    '  display: inline-block;',
    '  padding: 0.7rem 1.4rem;',
    '  background: var(--ink, #1f2225);',
    '  color: var(--paper, #fbf9f4);',
    '  font-family: inherit;',
    '  font-size: 0.9rem;',
    '  font-weight: 500;',
    '  border-radius: var(--radius-sm, 8px);',
    '  text-decoration: none;',
    '  transition: background 0.15s ease;',
    '}',
    '.sf-modal-success-btn:hover { background: var(--accent, #1b4d3e); }',
    '',
    'body.sf-modal-lock { overflow: hidden; }',
    '',
    '@media (max-width: 680px) {',
    '  .sf-modal-shell { padding: 0; }',
    '  .sf-modal-dialog {',
    '    border-radius: 0;',
    '    min-height: 100dvh;',
    '    padding: 1.75rem 1.25rem 2rem;',
    '  }',
    '  .sf-modal-meta { grid-template-columns: 1fr 1fr; }',
    '  .sf-modal-form-grid { grid-template-columns: 1fr; }',
    '  .sf-checkboxes { grid-template-columns: 1fr; }',
    '}'
  ].join('\n');

  var FORM_HTML = [
    '<div class="sf-modal-overlay" data-sf-modal-overlay></div>',
    '<div class="sf-modal-shell" id="sf-modal-shell" role="dialog" aria-modal="true" aria-labelledby="sf-modal-title">',
    '  <div class="sf-modal-dialog">',
    '    <div class="sf-modal-header">',
    '      <div>',
    '        <span class="sf-modal-eyebrow" data-i18n="assess.form.eyebrow">Start the conversation</span>',
    '        <h2 class="sf-modal-title" id="sf-modal-title" data-i18n-html="assess.form.h2">Tell us a little about your company. <em>We reply within two business days.</em></h2>',
    '      </div>',
    '      <button type="button" class="sf-modal-close" data-sf-modal-close aria-label="Close">&times;</button>',
    '    </div>',
    '    <p class="sf-modal-lede" data-i18n="assess.form.lead">The more concrete you are about what you\'d like AI to help with and what data is involved, the more useful our first conversation will be.</p>',
    '    <div class="sf-modal-meta">',
    '      <div class="sf-modal-meta-item">',
    '        <span class="sf-modal-meta-label" data-i18n="assess.summary.l1.label">Cost</span>',
    '        <span class="sf-modal-meta-value" data-i18n="assess.summary.l1.value">Free</span>',
    '      </div>',
    '      <div class="sf-modal-meta-item">',
    '        <span class="sf-modal-meta-label" data-i18n="assess.summary.l2.label">Duration</span>',
    '        <span class="sf-modal-meta-value" data-i18n="assess.summary.l2.value">48 hours to written plan</span>',
    '      </div>',
    '      <div class="sf-modal-meta-item">',
    '        <span class="sf-modal-meta-label" data-i18n="assess.summary.l4.label">Deliverable</span>',
    '        <span class="sf-modal-meta-value" data-i18n="assess.summary.l4.value">Written report + quote</span>',
    '      </div>',
    '    </div>',
    '    <form id="sf-modal-form" class="sf-modal-form" action="https://formspree.io/f/xkokqppr" method="POST" data-calendly="https://calendly.com/jordan-studiomonjo/30min" novalidate>',
    '      <input type="hidden" name="_subject" value="AI Readiness Review \u2014 new request">',
    '      <input type="hidden" name="_source" value="modal">',
    '      <div class="sf-modal-form-grid">',
    '        <div class="sf-field">',
    '          <label for="sf-name" data-i18n="assess.form.f.name">Your name</label>',
    '          <input type="text" id="sf-name" name="name" required autocomplete="name">',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-role" data-i18n="assess.form.f.role">Your role</label>',
    '          <input type="text" id="sf-role" name="role" required autocomplete="organization-title">',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-email" data-i18n="assess.form.f.email">Work email</label>',
    '          <input type="email" id="sf-email" name="email" required autocomplete="email">',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-company" data-i18n="assess.form.f.company">Company</label>',
    '          <input type="text" id="sf-company" name="company" required autocomplete="organization">',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-industry" data-i18n="assess.form.f.industry">Industry</label>',
    '          <input type="text" id="sf-industry" name="industry" required>',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-country" data-i18n="assess.form.f.country">Country</label>',
    '          <input type="text" id="sf-country" name="country" required autocomplete="country-name">',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-team-size" data-i18n="assess.form.f.teamSize">Team size</label>',
    '          <select id="sf-team-size" name="team_size" required>',
    '            <option value="" data-i18n="assess.form.o.teamSize.prompt">Select a range</option>',
    '            <option value="1-10" data-i18n="assess.form.o.teamSize.v1">1\u201310 people</option>',
    '            <option value="11-50" data-i18n="assess.form.o.teamSize.v2">11\u201350 people</option>',
    '            <option value="51-200" data-i18n="assess.form.o.teamSize.v3">51\u2013200 people</option>',
    '            <option value="201-500" data-i18n="assess.form.o.teamSize.v4">201\u2013500 people</option>',
    '            <option value="500+" data-i18n="assess.form.o.teamSize.v5">500+ people</option>',
    '          </select>',
    '        </div>',
    '        <div class="sf-field">',
    '          <label for="sf-timeline" data-i18n="assess.form.f.timeline">Timeline</label>',
    '          <select id="sf-timeline" name="timeline" required>',
    '            <option value="" data-i18n="assess.form.o.timeline.prompt">Select a range</option>',
    '            <option value="exploring" data-i18n="assess.form.o.timeline.v1">Just exploring</option>',
    '            <option value="3-6-months" data-i18n="assess.form.o.timeline.v2">Within 3\u20136 months</option>',
    '            <option value="soon" data-i18n="assess.form.o.timeline.v3">Soon \u2014 actively planning</option>',
    '            <option value="urgent" data-i18n="assess.form.o.timeline.v4">Urgent \u2014 starting now</option>',
    '          </select>',
    '        </div>',
    '        <div class="sf-field sf-field-full">',
    '          <label data-i18n="assess.form.f.workflows">Which workflows would you like AI to help with?</label>',
    '          <div class="sf-checkboxes">',
    '            <label><input type="checkbox" name="workflows" value="document_analysis"> <span data-i18n="assess.form.w.w1">Document analysis &amp; summaries</span></label>',
    '            <label><input type="checkbox" name="workflows" value="contract_review"> <span data-i18n="assess.form.w.w2">Contract &amp; legal review</span></label>',
    '            <label><input type="checkbox" name="workflows" value="rnd_knowledge"> <span data-i18n="assess.form.w.w3">R&amp;D &amp; technical knowledge</span></label>',
    '            <label><input type="checkbox" name="workflows" value="customer_data"> <span data-i18n="assess.form.w.w4">Customer data &amp; CRM operations</span></label>',
    '            <label><input type="checkbox" name="workflows" value="translation"> <span data-i18n="assess.form.w.w5">Translation &amp; multilingual work</span></label>',
    '            <label><input type="checkbox" name="workflows" value="internal_qa"> <span data-i18n="assess.form.w.w6">Internal Q&amp;A across company documents</span></label>',
    '            <label><input type="checkbox" name="workflows" value="drafting"> <span data-i18n="assess.form.w.w7">Drafting reports, emails, memos</span></label>',
    '            <label><input type="checkbox" name="workflows" value="other"> <span data-i18n="assess.form.w.w8">Something else (describe below)</span></label>',
    '          </div>',
    '        </div>',
    '        <div class="sf-field sf-field-full">',
    '          <label for="sf-sensitivity" data-i18n="assess.form.f.sensitivity">How sensitive is the data involved?</label>',
    '          <select id="sf-sensitivity" name="sensitivity" required>',
    '            <option value="" data-i18n="assess.form.o.sensitivity.prompt">Select a level</option>',
    '            <option value="routine" data-i18n="assess.form.o.sensitivity.v1">Routine business material</option>',
    '            <option value="confidential" data-i18n="assess.form.o.sensitivity.v2">Confidential \u2014 client or internal material</option>',
    '            <option value="regulated" data-i18n="assess.form.o.sensitivity.v3">Regulated \u2014 legal, financial, medical, or personal data</option>',
    '            <option value="critical" data-i18n="assess.form.o.sensitivity.v4">Highly sensitive \u2014 trade secrets, M&amp;A, investigations</option>',
    '          </select>',
    '        </div>',
    '        <div class="sf-field sf-field-full">',
    '          <label for="sf-current-ai" data-i18n="assess.form.f.currentAi">Current AI usage</label>',
    '          <select id="sf-current-ai" name="current_ai" required>',
    '            <option value="" data-i18n="assess.form.o.currentAi.prompt">Select a description</option>',
    '            <option value="none" data-i18n="assess.form.o.currentAi.v1">None yet</option>',
    '            <option value="cloud" data-i18n="assess.form.o.currentAi.v2">Cloud tools (ChatGPT, Claude, Gemini, etc.)</option>',
    '            <option value="local" data-i18n="assess.form.o.currentAi.v3">Local or self-hosted models</option>',
    '            <option value="mixed" data-i18n="assess.form.o.currentAi.v4">Mixed \u2014 cloud and local</option>',
    '          </select>',
    '        </div>',
    '        <div class="sf-field sf-field-full">',
    '          <label for="sf-context" data-i18n="assess.form.f.context">What should we know about your situation?</label>',
    '          <textarea id="sf-context" name="context" data-i18n-placeholder="assess.form.f.contextPlaceholder" placeholder="Workflows, pain points, constraints, specific questions\u2026"></textarea>',
    '          <span class="sf-hint" data-i18n="assess.form.f.contextHint">The more concrete, the more useful our reply.</span>',
    '        </div>',
    '      </div>',
    '      <div class="sf-submit-row">',
    '        <button type="submit" class="sf-submit-btn" id="sf-submit-btn" data-i18n="assess.form.submit" data-i18n-sending="assess.form.sending">Send request</button>',
    '        <span class="sf-submit-note" data-i18n="assess.form.submitNote">We reply within two business days.</span>',
    '      </div>',
    '      <p class="sf-form-error" id="sf-form-error" role="alert" data-i18n-html="assess.form.error.body">Something went wrong sending your form. If this keeps happening, <a href="https://calendly.com/jordan-studiomonjo/30min" target="_blank" rel="noopener">book a time directly</a> and we\'ll gather the rest over email.</p>',
    '    </form>',
    '    <div class="sf-modal-success" id="sf-modal-success" aria-live="polite">',
    '      <h3 data-i18n-html="assess.form.success.title">Request received. <em>Now pick a time.</em></h3>',
    '      <p data-i18n="assess.form.success.body">Your details are on their way to us. Pick a 30-minute slot that works for you \u2014 your name and email are already filled in, and we\'ll have the qualifier in hand when we meet.</p>',
    '      <div class="sf-modal-success-actions">',
    '        <a href="https://calendly.com/jordan-studiomonjo/30min" target="_blank" rel="noopener" class="sf-modal-success-btn" id="sf-modal-success-cta" data-i18n="assess.form.success.cta">Pick a time on the calendar</a>',
    '        <span class="sf-modal-success-note" data-i18n="assess.form.success.note">Opens Calendly \u2014 takes under a minute</span>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');

  function injectStyles() {
    var style = document.createElement('style');
    style.id = 'sf-modal-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function injectDom() {
    var container = document.createElement('div');
    container.id = 'sf-modal-root';
    container.innerHTML = FORM_HTML;
    document.body.appendChild(container);
  }

  function translate() {
    if (window.SF_i18n && typeof window.SF_i18n.apply === 'function') {
      window.SF_i18n.apply(window.SF_i18n.current());
    }
  }

  function buildCalendlyUrl(base, data) {
    if (!base) return '';
    var name = (data.get('name') || '').toString().trim();
    var email = (data.get('email') || '').toString().trim();
    var company = (data.get('company') || '').toString().trim();
    var role = (data.get('role') || '').toString().trim();
    var timeline = (data.get('timeline') || '').toString().trim();
    var industry = (data.get('industry') || '').toString().trim();
    var params = new URLSearchParams();
    if (name) params.set('name', name);
    if (email) params.set('email', email);
    var summary = [company, role, industry, timeline].filter(Boolean).join(' · ');
    if (summary) params.set('a1', summary);
    var q = params.toString();
    return q ? base + (base.indexOf('?') === -1 ? '?' : '&') + q : base;
  }

  function wire() {
    var overlay = document.querySelector('[data-sf-modal-overlay]');
    var shell = document.getElementById('sf-modal-shell');
    var form = document.getElementById('sf-modal-form');
    var closeBtn = document.querySelector('[data-sf-modal-close]');
    var submitBtn = document.getElementById('sf-submit-btn');
    var successEl = document.getElementById('sf-modal-success');
    var successCta = document.getElementById('sf-modal-success-cta');
    var errorEl = document.getElementById('sf-form-error');

    var lastFocus = null;
    var originalBtnLabel = '';

    function open(trigger) {
      lastFocus = trigger || document.activeElement;
      overlay.classList.add('is-open');
      shell.classList.add('is-open');
      document.body.classList.add('sf-modal-lock');
      translate();
      setTimeout(function () {
        var first = form.querySelector('input, select, textarea');
        if (first) first.focus();
      }, 120);
    }

    function close() {
      overlay.classList.remove('is-open');
      shell.classList.remove('is-open');
      document.body.classList.remove('sf-modal-lock');
      if (lastFocus && typeof lastFocus.focus === 'function') {
        try { lastFocus.focus(); } catch (e) {}
      }
    }

    function reset() {
      form.removeAttribute('data-state');
      form.style.display = '';
      successEl.classList.remove('is-visible');
      if (submitBtn && originalBtnLabel) submitBtn.textContent = originalBtnLabel;
    }

    document.addEventListener('click', function (ev) {
      var trigger = ev.target.closest ? ev.target.closest('[data-open-assessment]') : null;
      if (!trigger) return;
      ev.preventDefault();
      reset();
      open(trigger);
    });

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && shell.classList.contains('is-open')) close();
    });

    if (!form) return;

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      var required = form.querySelectorAll('[required]');
      var firstInvalid = null;
      for (var i = 0; i < required.length; i++) {
        if (!required[i].checkValidity()) { firstInvalid = required[i]; break; }
      }
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.reportValidity();
        return;
      }

      form.setAttribute('data-state', 'sending');
      if (submitBtn) {
        if (!originalBtnLabel) originalBtnLabel = submitBtn.textContent;
        submitBtn.textContent = submitBtn.getAttribute('data-label-sending') || 'Sending…';
      }

      var data = new FormData(form);
      var calendlyBase = form.getAttribute('data-calendly') || '';
      var calendlyUrl = buildCalendlyUrl(calendlyBase, data);
      if (calendlyUrl && successCta) successCta.setAttribute('href', calendlyUrl);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        form.setAttribute('data-state', 'success');
        form.style.display = 'none';
        if (successEl) {
          successEl.classList.add('is-visible');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }).catch(function () {
        form.setAttribute('data-state', 'error');
        if (submitBtn && originalBtnLabel) submitBtn.textContent = originalBtnLabel;
        if (errorEl) errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  function boot() {
    injectStyles();
    injectDom();
    translate();
    wire();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
