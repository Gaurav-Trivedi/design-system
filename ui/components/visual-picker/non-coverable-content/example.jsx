// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../../app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { Fieldset, Legend, FormElementControl } from '../../radio-group/base/example';
import { VisualPicker } from '../coverable-content/example';
import {UtilityIcon} from '../../icons/base/example';

const PackageOne = ([
  <span className="slds-text-heading--small" key={_.uniqueId()}>Lightning Professional</span>,
  <span className="slds-text-title" key={_.uniqueId()}>Complete service CRM for teams of any size</span>
]);

const PackageTwo = ([
  <span className="slds-text-heading--small" key={_.uniqueId()}>Lightning Enterprise</span>,
  <span className="slds-text-title" key={_.uniqueId()}>Everything you need to take support to the next level</span>
]);

const PackageThree = ([
  <span className="slds-text-heading--small" key={_.uniqueId()}>Lightning Unlimited</span>,
  <span className="slds-text-title" key={_.uniqueId()}>Complete support with enterprise-grade customization</span>
]);


export let VisualPickerMediaObject = props =>
  <a
    href="javascript:void(0);"
    className={classNames(
      'slds-box slds-box_link slds-box--x-small slds-media',
      props.className
    )}
  >
    <div className="slds-media__figure slds-media__figure_fixed-width slds-align--absolute-center slds-m-left--xx-small">
      <UtilityIcon
        className="slds-icon-text-default"
        symbol="knowledge_base"
      />
    </div>
    <div className="slds-media__body slds-border--left slds-p-around--small">
      {props.children}
    </div>
  </a>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Fieldset>
    <Legend>Select a plan</Legend>
    <FormElementControl>
      <VisualPicker type="radio" size="medium" label={PackageOne}>
        <span>
          <span className="slds-text-heading--large">$30</span>
          <span className="slds-text-title">USD/user/month *</span>
        </span>
      </VisualPicker>
      <VisualPicker type="radio" size="medium" label={PackageTwo}>
        <span>
          <span className="slds-text-heading--large">$150</span>
          <span className="slds-text-title">USD/user/month *</span>
        </span>
      </VisualPicker>
      <VisualPicker type="radio" size="medium" label={PackageThree}>
        <span>
          <span className="slds-text-heading--large">$300</span>
          <span className="slds-text-title">USD/user/month *</span>
        </span>
      </VisualPicker>
    </FormElementControl>
  </Fieldset>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled option',
    element:
      <Fieldset>
        <Legend>Select a plan</Legend>
        <FormElementControl>
          <VisualPicker type="radio" size="medium" label={PackageOne}>
            <span>
              <span className="slds-text-heading--large">$30</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="medium" label={PackageTwo}>
            <span>
              <span className="slds-text-heading--large">$150</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="medium" disabled={true} label={PackageThree}>
            <span>
              <span className="slds-text-heading--large">$300</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
        </FormElementControl>
      </Fieldset>
  }
];

export let examples = [
  {
    id: 'link',
    label: 'Text link',
    element:
      <div className="demo-only" style={{width: '24rem'}}>
        <VisualPickerMediaObject symbol="user">
          <h2 className="slds-truncate slds-text-heading--small" title="Share the knowledge">Share the knowledge</h2>
          <p className="slds-m-top--small">Harness your team's collective know-how with our powerful knowledge base</p>
        </VisualPickerMediaObject>
      </div>
  }
];