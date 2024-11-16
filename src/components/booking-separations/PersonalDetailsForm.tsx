import React from "react";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PersonalDetailsForm = ({ form, onNext }: any) => (
  <div className="space-y-4 sm:space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="First Name" className="border-gray-200 focus-visible:ring-rose-500 bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Last Name" className="border-gray-200 focus-visible:ring-rose-500 bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder="Email" className="border-gray-200 focus-visible:ring-rose-500 bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder="Phone Number" className="border-gray-200 focus-visible:ring-rose-500 bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button
      type="button"
      onClick={onNext}
      className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 shadow-sm"
    >
      Next Step <ChevronRight className="ml-2 w-4 h-4" />
    </Button>
  </div>
);

export default PersonalDetailsForm;
