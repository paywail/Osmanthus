import * as React from "react";
import { Editor } from "@craftjs/core";
import { store } from "../store";
import type { FrameworRef } from "../../../../pages/preview/mount-ref";
import { MountRef } from "../../../../pages/preview/mount-ref";

type EditorProps = React.ComponentProps<typeof Editor>;

export type FrameworkProviderProps = Pick<EditorProps, "enabled">;

export const FrameworkContext = React.createContext<EditorProps | null>({
  enabled: true,
});

export const FrameworkContextProvider = React.forwardRef<FrameworRef, EditorProps>((props, ref) => {
  return (
    <FrameworkContext.Provider
      value={{
        enabled: props.enabled,
      }}
    >
      <Editor {...props}>
        <MountRef ref={ref} />
        {props.children}
      </Editor>
    </FrameworkContext.Provider>
  );
});
