# Accessibility playground notes

The hand-built modal in `playground/ModalDialog.tsx` uses dialog semantics, labelled title and description, moves focus into the dialog, traps forward and reverse Tab, closes on Escape or its buttons, and returns focus to the opener. `playground/Tabs.tsx` wires tablist, tabs, and panels with matching IDs and ARIA attributes. Arrow Right/Left, Home, and End move focus; Enter and Space activate a tab. Only the active panel is rendered. `playground/Disclosure.tsx` uses a real button with `aria-expanded` and `aria-controls`; collapsed content is not rendered, so it cannot receive focus.

## Keyboard test checklist

- Tab through each demo and confirm focus remains visible.
- Use Shift+Tab to move backward, especially inside the open modal.
- Open the modal, use Tab and Shift+Tab at both boundaries, then press Escape.
- Use Arrow Right and Arrow Left across the tabs.
- Use Home and End to reach the first and last tab.
- Use Enter and Space to activate the focused tab and toggle the disclosure.
- Confirm modal focus returns to its opening button after close.

## shadcn/ui comparison

The copied shadcn/ui-style source in `components/ui/dialog.tsx` delegates dialog behavior to Radix Dialog. That gives it robust focus trapping and focus restoration after close that a first hand-built version could miss. It also provides portal rendering, overlay behavior, and title/description primitives that support the dialog accessibility contract.

The copied `components/ui/tabs.tsx` delegates tab keyboard behavior, active state, and accessible ID/ARIA wiring to Radix Tabs. This is another concrete area where a first hand-built version could miss edge cases in roving focus or panel association. The source is copied into this project and can be reviewed and customized; the playground demonstrations remain separate hand-built components.
