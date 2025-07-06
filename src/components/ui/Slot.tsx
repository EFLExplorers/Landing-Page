import * as React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ref: ref
        ? mergeRefs([ref, (children as any).ref])
        : (children as any).ref,
    });
  }
);

Slot.displayName = "Slot";

// Utility to merge refs
function mergeRefs<T = any>(refs: React.Ref<T>[]): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = value;
      }
    });
  };
}
