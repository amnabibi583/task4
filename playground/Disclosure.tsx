import { useState } from 'react';

export function Disclosure() { const [expanded, setExpanded] = useState(false); return <div><button className="disclosure" aria-expanded={expanded} aria-controls="disclosure-content" onClick={() => setExpanded((value) => !value)}>Keyboard guidance <span aria-hidden="true">{expanded ? '−' : '+'}</span></button>{expanded && <div id="disclosure-content" className="disclosure-content">Use Tab to reach controls, Enter or Space to activate them, and Escape to dismiss the modal.</div>}</div>; }
