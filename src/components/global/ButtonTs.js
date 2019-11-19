import React, {Component} from 'react';
import { translate } from "react-translate";

const ButtonTs = (props) =>
{
    const {t} = props;
    return <button>{t(props.name)}</button>
}

export default translate('buttons')(ButtonTs);