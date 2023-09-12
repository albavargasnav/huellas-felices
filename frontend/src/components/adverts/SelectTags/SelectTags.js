import React from 'react';

import { getTags } from '../service';
import { CheckboxGroup } from '../../common';
import useQuery from '../../../hooks/useQuery';

function SelectTags(props) {
   const { data: size = [] } = useQuery(getTags);
   return <CheckboxGroup options={size} {...props} />;
}

export default SelectTags;
