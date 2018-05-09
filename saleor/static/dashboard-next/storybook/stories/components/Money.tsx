import { storiesOf } from "@storybook/react";
import * as React from "react";

import Money from "../../../components/Money";
import Decorator from "../../Decorator";

storiesOf("Components / Money", module)
  .addDecorator(Decorator)
  .add("default", () => <Money amount={14} currency="$" />);
