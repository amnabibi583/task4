import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

const focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ModalDialog() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) { triggerRef.current?.focus(); return; }
    dialogRef.current?.querySelector<HTMLElement>(focusable)?.focus();
    const dialog = dialogRef.current;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return; }
      if (event.key !== 'Tab' || !dialog) return;
      // Keep Tab and Shift+Tab cycling within the dialog.
      const items = [...dialog.querySelectorAll<HTMLElement>(focusable)].filter((item) => !item.hasAttribute('disabled'));
      if (!items.length) return;
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const onTrigger = () => { triggerRef.current = document.activeElement as HTMLButtonElement; setOpen(true); };
  return <><button ref={triggerRef} className="primary" onClick={onTrigger}>Open modal</button>{open && <div className="overlay"><div ref={dialogRef} className="dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description"><h3 id="modal-title">Review alert</h3><p id="modal-description">This dialog demonstrates focus management and keyboard dismissal.</p><div className="dialog-actions"><button className="secondary" onClick={() => setOpen(false)}>Close</button><button className="primary" onClick={() => setOpen(false)}>Confirm</button></div></div></div>}</>;
}
