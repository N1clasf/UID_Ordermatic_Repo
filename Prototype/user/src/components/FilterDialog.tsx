import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { useState } from "react";
import { Order } from "../types/order";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (filters: FilterState) => void;
}

interface FilterState {
  search: string;
  status: string;
  orderDateStart: string;
  orderDateEnd: string;
  deliveryDateStart: string;
  deliveryDateEnd: string;
}

export function FilterDialog({ open, onOpenChange, onApplyFilters }: FilterDialogProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "",
    orderDateStart: "",
    orderDateEnd: "",
    deliveryDateStart: "",
    deliveryDateEnd: "",
  });

  const handleApply = () => {
    onApplyFilters(filters);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Search</Label>
            <Input
              placeholder="Order Nr., Name..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>State</Label>
            <Select
              value={filters.status}
              onValueChange={(value) => setFilters({ ...filters, status: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-transit">In Transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Order Date</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={filters.orderDateStart}
                onChange={(e) => setFilters({ ...filters, orderDateStart: e.target.value })}
              />
              <Input
                type="date"
                value={filters.orderDateEnd}
                onChange={(e) => setFilters({ ...filters, orderDateEnd: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Deliver Date</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={filters.deliveryDateStart}
                onChange={(e) => setFilters({ ...filters, deliveryDateStart: e.target.value })}
              />
              <Input
                type="date"
                value={filters.deliveryDateEnd}
                onChange={(e) => setFilters({ ...filters, deliveryDateEnd: e.target.value })}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleApply}>Apply Filters</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}