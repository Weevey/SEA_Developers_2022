import React from "react";
import { create } from 'react-test-renderer';

import Header from "../Components/Header";

test(`Header matched snapshot`, () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
});