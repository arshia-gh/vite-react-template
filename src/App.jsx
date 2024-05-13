import React from "react";
import { Button } from "./components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./components/dialog";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <DialogTrigger asChild>
          <Button>Hello World</Button>
        </DialogTrigger>
        <DialogContent>
          <p>Are you sure you want to delete this item?</p>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                // delete something
                setOpen(false);
              }}
            >
              Okay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
