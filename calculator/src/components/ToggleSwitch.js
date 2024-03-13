import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Sun, Moon } from "lucide-react";

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-center w-full py-8">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        />
        <span className="absolute inset-y-0 right-0 flex items-center mr-2">
          {enabled ? (
            <Sun color="white" size={16} />
          ) : (
            <Moon color="gray" size={16} />
          )}
        </span>
      </Switch>
    </div>
  );
}

export default ToggleSwitch;
