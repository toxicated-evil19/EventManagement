import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface EventInformationFormProps {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const EventInformationForm: React.FC<EventInformationFormProps> = ({ onNextStep, onPreviousStep }) => {
  const form = useFormContext(); // Access the parent form context

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FormItem className="relative">
          <FormControl>
            <Input
              type="date"
              placeholder="Event Date"
              className="border-gray-200 focus-visible:ring-rose-500 bg-white"
              {...form.register("eventDate")}
            />
          </FormControl>
          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
          <FormMessage />
        </FormItem>

        <FormItem className="relative">
          <FormControl>
            <Input
              type="time"
              placeholder="Event Time"
              className="border-gray-200 focus-visible:ring-rose-500 bg-white"
              {...form.register("eventTime")}
            />
          </FormControl>
          <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4" />
          <FormMessage />
        </FormItem>
      </div>

      <FormItem>
        <FormControl>
          <Input
            placeholder="Event Location"
            className="border-gray-200 focus-visible:ring-rose-500 bg-white"
            {...form.register("location")}
          />
        </FormControl>
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormControl>
          <Textarea
            placeholder="Describe your vision..."
            className="min-h-[120px] border-gray-200 focus-visible:ring-rose-500 bg-white"
            {...form.register("description")}
          />
        </FormControl>
        <FormMessage />
      </FormItem>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onPreviousStep}
          className="w-full sm:w-auto border-rose-200 text-rose-500 hover:bg-rose-50 shadow-sm"
        >
          Previous Step
        </Button>
        <Button
          type="button"
          onClick={onNextStep}
          className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 shadow-sm"
        >
          Review Details
        </Button>
      </div>
    </div>
  );
};

export default EventInformationForm;
