

import * as React from "react"

import { Progress } from "@/components/atoms/progress"
import { Slider } from "#/components/atoms/slider"

export function ProgressControlled() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value} className="w-full" />
      <Slider
        value={[60]}
        onValueChange={(value) => setValue(value as unknown as number)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  )
}
