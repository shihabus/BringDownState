import { useState } from "react";
import { Button } from "./Button";
import { ModalDialog } from "./ModalDialog";

export const ButtonWithModalDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
        {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
      </>
    );
  };