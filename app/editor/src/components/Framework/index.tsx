import * as _materials from '@osmanthus/materials';

console.log('test-------->_materials, ----->', _materials);
export const Framework = () => {
  return (
    <div className="flex">
      <div className="w-1/3 flex-none">Left</div>
      <div className="w-auto flex-1">middle</div>
      <div className="w-1/3">right</div>
    </div>
  )


}