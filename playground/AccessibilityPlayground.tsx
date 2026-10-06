import { Disclosure } from './Disclosure';
import { ModalDialog } from './ModalDialog';
import { Tabs } from './Tabs';

export function AccessibilityPlayground() { return <main className="app"><p className="eyebrow">FE-03</p><h1>Accessibility Playground</h1><p className="intro">Three hand-built accessible interactions for testing keyboard and focus behavior.</p><div className="grid"><section className="demo"><h2>Modal dialog</h2><p>Focus moves in, stays in, and returns to the trigger.</p><ModalDialog /></section><section className="demo"><h2>Tabs</h2><p>Use arrows, Home, End, Enter, and Space.</p><Tabs /></section><section className="demo"><h2>Disclosure</h2><p>Collapsed content is removed from the focus order.</p><Disclosure /></section></div></main>; }
