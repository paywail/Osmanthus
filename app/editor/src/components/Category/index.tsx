import * as _materials from '@osmanthus/materials';


const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}));
export interface CategoryProps {
  list?: typeof baseMaterials[];
  title: string;
}
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";

import { useEditor, Element } from "@craftjs/core";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Button size={'small'} >按钮</Button>)}>按钮</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Text text='Is a new Text Component' />)}>文本框</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Element is={Container} canvas padding='20px'>Custom Container</Element>)}>容器</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained" ref={(ref) => connectors.create(ref, <Card background='transparent' >Custom Card</Card>)}>卡片</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};