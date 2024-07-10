import {Canvas, useNode} from "@craftjs/core";
import { TextComponent } from "./TextComponent";
const Container = () => {
  const { connectors: {drag} } = useNode();

  return (
    <div ref={drag}>
      <Canvas id="drop_section">
         // Now users will be able to drag/drop components into this section
        <TextComponent text={'1231'} />
      </Canvas>
    </div>
  )
}
export default Container