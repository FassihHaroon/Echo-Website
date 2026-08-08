"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

const ITEMS = [
  { qty: 1, name: "Large Pepperoni Pizza", price: "$18.00" },
  { qty: 1, name: "Garlic Bread", price: "$4.50" },
  { qty: 1, name: "Coca-Cola", price: "$2.00" },
];

export default function OrderTicketMockup() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.15em] text-silver-dim">
          Order #4127
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-silver"
        >
          Sent to kitchen
        </motion.span>
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-3">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.15 * i }}
            className="flex items-center justify-between border-b border-white/5 pb-3 text-sm"
          >
            <span className="text-foreground">
              <span className="mr-2 text-silver-dim">{item.qty}×</span>
              {item.name}
            </span>
            <span className="text-silver">{item.price}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-4 flex items-center justify-between text-sm font-medium"
      >
        <span className="text-foreground">Total</span>
        <span className="text-foreground">$24.50</span>
      </motion.div>
    </div>
  );
}
