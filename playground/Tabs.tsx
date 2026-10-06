import { useRef, useState, type KeyboardEvent } from 'react';

const tabs = [{ id: 'overview', label: 'Overview', content: 'Review the most important accessibility signals.' }, { id: 'details', label: 'Details', content: 'Inspect interaction and focus behavior in detail.' }, { id: 'history', label: 'History', content: 'See how this playground supports repeatable checks.' }];

export function Tabs() {
  const [active, setActive] = useState(tabs[0].id); const [focused, setFocused] = useState(tabs[0].id); const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const keyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => { let next = index; if (event.key === 'ArrowRight') next = (index + 1) % tabs.length; if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length - 1; if (next !== index) { event.preventDefault(); setFocused(tabs[next].id); refs.current[tabs[next].id]?.focus(); } if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActive(tabs[index].id); } };
  return <div><div className="tabs-list" role="tablist" aria-label="Alert views">{tabs.map((tab, index) => <button key={tab.id} ref={(node) => { refs.current[tab.id] = node; }} className="tab" role="tab" id={`tab-${tab.id}`} aria-selected={active === tab.id} aria-controls={`panel-${tab.id}`} tabIndex={focused === tab.id ? 0 : -1} onFocus={() => setFocused(tab.id)} onClick={() => setActive(tab.id)} onKeyDown={(event) => keyDown(event, index)}>{tab.label}</button>)}</div>{tabs.map((tab) => active === tab.id && <div key={tab.id} className="panel" role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} tabIndex={0}>{tab.content}</div>)}</div>;
}
