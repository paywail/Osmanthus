import React, { useEffect } from 'react';
import { Framework } from '../../components';
import { DocumentNodes } from '@/components/Framework/components/Container';
import { useParams } from 'react-router-dom';
import { MountRef } from './mount-ref';


const Preview = () => {
  const editorFrameworkRef = React.useRef<any>(null);
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const schema = sessionStorage.getItem(params.id);
      if (editorFrameworkRef?.current && schema) {
        editorFrameworkRef.current?.onLoadState(schema);
      } else {
      }
    }
    return () => { };
  }, [params.id]);

  return (
    <div className='flex m-4' >
      <Framework enabled={false}>
        <MountRef ref={editorFrameworkRef} />
        <DocumentNodes />
      </Framework>
    </div>
  );
};

export default Preview;