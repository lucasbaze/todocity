import React from 'react';

import { Graph, Thing } from 'schema-dts';

interface IJsonLinkedDataProps
  extends React.HtmlHTMLAttributes<HTMLScriptElement> {
  dataTestId?: string;
  schema: Graph | Thing;
}

export const JsonLinkedData: React.FC<IJsonLinkedDataProps> = ({
  dataTestId,
  schema,
}) => {
  return (
    <script
      data-testid={dataTestId}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    ></script>
  );
};
