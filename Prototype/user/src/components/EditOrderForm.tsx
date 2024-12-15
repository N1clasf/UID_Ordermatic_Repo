import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Order } from "@/types/order";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface EditOrderFormProps {
  order: Order;
  onSave: (updatedOrder: Order) => void;
  open: boolean;
  onClose: () => void;
}

const EditOrderForm = ({ order, onSave, open, onClose }: EditOrderFormProps) => {
  const [editedOrder, setEditedOrder] = useState<Order>(order);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedOrder);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Order Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Contact Name</label>
            <Input
              value={editedOrder.contact.name}
              onChange={(e) =>
                setEditedOrder({
                  ...editedOrder,
                  contact: { ...editedOrder.contact, name: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">Company</label>
            <Input
              value={editedOrder.contact.company}
              onChange={(e) =>
                setEditedOrder({
                  ...editedOrder,
                  contact: { ...editedOrder.contact, company: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">Delivery Address</label>
            <Input
              value={editedOrder.deliveryAddress.street}
              onChange={(e) =>
                setEditedOrder({
                  ...editedOrder,
                  deliveryAddress: {
                    ...editedOrder.deliveryAddress,
                    street: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditOrderForm;