export const formioOptions = {
  builder: {
    advanced: {
      components: {
        unknown: false,
        form: false
      }
    },
    customOutlet: {
      title: 'Custom Components',
      default: true,
      weight: 0,
      components: {
        dimage: true,
        formHeader: true,
        hSkeleton: true,
      }
    }
  },
  editForm: {
    formHeader: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'validation',
        ignore: true
      },
      {
        key: 'conditional',
        ignore: true
      },
      {
        key: 'logic',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'hideLabel',
            ignore: true
          },
          {
            weight: 1350,
            key: 'spellcheck',
            ignore: true
          },
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'labelPosition',
            ignore: true
          },
          {
            key: 'description',
            ignore: true
          },
          {
            key: 'autocomplete',
            ignore: true
          },
          {
            key: 'modalEdit',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'widget.type',
            ignore: true
          },
          {
            key: 'inputMask',
            ignore: true
          },
          {
            key: 'inputMask',
            ignore: true
          },
          {
            key: 'displayMask',
            ignore: true
          },
          {
            key: 'allowMultipleMasks',
            ignore: true
          },
          {
            key: 'prefix',
            ignore: true
          },
          {
            key: 'suffix',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          },
          {
            key: 'showWordCount',
            ignore: true
          },
          {
            key: 'showCharCount',
            ignore: true
          }
        ]
      }
    ],
    textfield: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'validation',
        components: [
          {
            key: 'validate.minWords',
            ignore: true
          },
          {
            key: 'validate.maxWords',
            ignore: true
          }
        ]
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'isDisableForUser',
            input: true,
            label: 'Is Disable for User',
            type: 'checkbox'
          },
          {
            key: 'isHiddenForUser',
            input: true,
            label: 'Is Hidden for User',
            type: 'checkbox'
          },
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'widget.type',
            ignore: true
          },
          {
            key: 'inputMask',
            ignore: true
          },
          {
            key: 'allowMultipleMasks',
            ignore: true
          },
          {
            key: 'prefix',
            ignore: true
          },
          {
            key: 'suffix',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          },
          {
            key: 'showWordCount',
            ignore: true
          },
          {
            key: 'showCharCount',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'widget.type',
            input: true,
            label: 'Widget',
            type: 'select'
          },
          {
            key: 'inputMask',
            input: true,
            label: 'Input Mask',
            placeholder: 'Input Mask',
            type: 'textfield'
          },
          {
            key: 'allowMultipleMasks',
            input: true,
            label: 'Allow Multiple Masks',
            type: 'checkbox'
          },
          {
            key: 'prefix',
            input: true,
            label: 'Prefix',
            placeholder: 'Prefix',
            type: 'textfield'
          },
          {
            key: 'suffix',
            input: true,
            label: 'Suffix',
            placeholder: 'Suffix',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    number: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    password: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'prefix',
            ignore: true
          },
          {
            key: 'suffix',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'showWordCount',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'prefix',
            input: true,
            label: 'Prefix',
            placeholder: 'Prefix',
            type: 'textfield'
          },
          {
            key: 'suffix',
            input: true,
            label: 'Suffix',
            placeholder: 'Suffix',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    textarea: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'prefix',
            ignore: true
          },
          {
            key: 'suffix',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'prefix',
            input: true,
            label: 'Prefix',
            placeholder: 'Prefix',
            type: 'textfield'
          },
          {
            key: 'suffix',
            input: true,
            label: 'Suffix',
            placeholder: 'Suffix',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    checkbox: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          {
            key: 'shortcut',
            ignore: true
          },
          {
            key: 'errorLabel',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'labelWidth',
            input: true,
            label: 'Label Width',
            type: 'number'
          },
          {
            key: 'labelMargin',
            input: true,
            label: 'Label Margin',
            type: 'number'
          },
          {
            key: 'placeholder',
            input: true,
            label: 'Placeholder',
            placeholder: 'Placeholder',
            type: 'textfield'
          },
          {
            key: 'shortcut',
            input: true,
            label: 'Shortcut',
            type: 'select'
          },
          {
            key: 'errorLabel',
            input: true,
            label: 'Error Label',
            placeholder: 'Error Label',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    time: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'format',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'format',
            input: true,
            label: 'Format',
            type: 'textfield'
          },
          {
            key: 'placeholder',
            input: true,
            label: 'Placeholder',
            placeholder: 'Placeholder',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    select: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'data',
        label: 'Advanced',
        components: [
          {
            key: 'refreshOn',
            ignore: true
          },
          {
            key: 'clearOnRefresh',
            ignore: true
          },
          {
            key: 'allowCalculateOverride',
            ignore: true
          },
          {
            key: 'encrypted',
            ignore: true
          },
          {
            key: 'dbIndex',
            ignore: true
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    radio: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'optionsLabelPosition',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'placeholder',
            input: true,
            label: 'Placeholder',
            placeholder: 'Placeholder',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    content: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'refreshOnChange',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'data',
        label: 'Advanced'
      }
    ],
    button: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          // {
          //   key: 'size',
          //   ignore: true
          // },
          {
            key: 'leftIcon',
            ignore: true
          },
          {
            key: 'rightIcon',
            ignore: true
          },
          {
            key: 'shortcut',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'block',
            ignore: true
          },
          {
            key: 'disableOnInvalid',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'placeholder',
            input: true,
            label: 'Placeholder',
            placeholder: 'Placeholder',
            type: 'textfield'
          },
          {
            key: 'size',
            input: true,
            label: 'Size',
            type: 'select'
          },
          {
            key: 'leftIcon',
            input: true,
            label: 'Left Icon',
            placeholder: 'Enter icon classes',
            type: 'textfield'
          },
          {
            key: 'rightIcon',
            input: true,
            label: 'Right Icon',
            placeholder: 'Enter icon classes',
            type: 'textfield'
          },
          {
            key: 'shortcut',
            input: true,
            label: 'Shortcut',
            type: 'select'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          {
            key: 'block',
            input: true,
            label: 'Block',
            type: 'checkbox'
          },
          {
            key: 'disableOnInvalid',
            input: true,
            label: 'Disable On Invalid',
            type: 'checkbox'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    email: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    url: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'inputMask',
            ignore: true
          },
          {
            key: 'allowMultipleMasks',
            ignore: true
          },
          {
            key: 'prefix',
            ignore: true
          },
          {
            key: 'suffix',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'showWordCount',
            ignore: true
          },
          {
            key: 'showCharCount',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'inputMask',
            input: true,
            label: 'Input Mask',
            type: 'textfield'
          },
          {
            key: 'prefix',
            input: true,
            label: 'Prefix',
            placeholder: 'Prefix',
            type: 'textfield'
          },
          {
            key: 'suffix',
            input: true,
            label: 'Suffix',
            placeholder: 'Suffix',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'showWordCount',
            input: true,
            label: 'Show Word Count',
            type: 'checkbox'
          },
          {
            key: 'showCharCount',
            input: true,
            label: 'Show Char Count',
            type: 'checkbox'
          },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    phoneNumber: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'inputMask',
            ignore: true
          },
          {
            key: 'allowMultipleMasks',
            ignore: true
          },
          {
            key: 'prefix',
            ignore: true
          },
          {
            key: 'suffix',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'showWordCount',
            ignore: true
          },
          {
            key: 'showCharCount',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'inputMask',
            input: true,
            label: 'Input Mask',
            type: 'textfield'
          },
          {
            key: 'prefix',
            input: true,
            label: 'Prefix',
            placeholder: 'Prefix',
            type: 'textfield'
          },
          {
            key: 'suffix',
            input: true,
            label: 'Suffix',
            placeholder: 'Suffix',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'showWordCount',
            input: true,
            label: 'Show Word Count',
            type: 'checkbox'
          },
          {
            key: 'showCharCount',
            input: true,
            label: 'Show Char Count',
            type: 'checkbox'
          },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    address: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    datetime: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'date',
        ignore: true
      },
      {
        key: 'time',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'enableDate',
            input: true,
            label: 'Enable Date Input',
            type: 'checkbox'
          },
          {
            key: 'datePicker.minDate',
            input: true,
            label: 'Min Date',
            placeholder: 'yyyy-MM-dd',
            type: 'textfield'
          },
          {
            key: 'datePicker.maxDate',
            input: true,
            label: 'Max Date',
            placeholder: 'yyyy-MM-dd',
            type: 'textfield'
          },
          {
            key: 'enableTime',
            input: true,
            label: 'Enable Time Input',
            type: 'checkbox'
          },
          {
            key: 'timePicker.hourStep',
            input: true,
            label: 'Hour Step',
            type: 'textfield'
          },
          {
            key: 'timePicker.minuteStep',
            input: true,
            label: 'Minute Step',
            type: 'textfield'
          },
          {
            key: 'timePicker.showMeridian',
            input: true,
            label: '12 Hour Time (AM/PM)',
            type: 'checkbox'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    day: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'dayFirst',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'dayFirst',
            input: true,
            label: 'Day First',
            type: 'checkbox'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    tags: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          }
        ]
      }
    ],
    currency: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    file: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'validation',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    signature: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          {
            key: 'description',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'placeholder',
            input: true,
            label: 'Placeholder',
            placeholder: 'Placeholder',
            type: 'textfield'
          },
          {
            key: 'description',
            input: true,
            label: 'Description',
            placeholder: 'Description',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    survey: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'placeholder',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'placeholder',
            input: true,
            label: 'Placeholder',
            placeholder: 'Placeholder',
            type: 'textfield'
          },
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    location: [
      {
        key: 'api',
        ignore: true
      },
      {
        key: 'data',
        ignore: true
      },
      {
        key: 'validation',
        ignore: true
      },
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'labelMargin',
            ignore: true
          },
          {
            key: 'tooltip',
            ignore: true
          },
          {
            key: 'labelWidth',
            ignore: true
          },
          {
            key: 'customClass',
            ignore: true
          },
          {
            key: 'tabindex',
            ignore: true
          },
          {
            key: 'persistent',
            ignore: true
          },
          {
            key: 'multiple',
            ignore: true
          },
          {
            key: 'clearOnHide',
            ignore: true
          },
          {
            key: 'protected',
            ignore: true
          },
          {
            key: 'hidden',
            ignore: true
          },
          {
            key: 'mask',
            ignore: true
          },
          {
            key: 'disabled',
            ignore: true
          },
          {
            key: 'autofocus',
            ignore: true
          },
          {
            key: 'tableView',
            ignore: true
          },
          {
            key: 'alwaysEnabled',
            ignore: true
          }
        ]
      },
      {
        key: 'Advanced',
        label: 'Advanced',
        components: [
          {
            key: 'customClass',
            input: true,
            label: 'Custom Class',
            placeholder: 'Custom CSS Class',
            type: 'textfield'
          },
          {
            key: 'tabindex',
            input: true,
            label: 'Tab Index',
            placeholder: 'Tab Index',
            type: 'textfield'
          },
          // {
          //   key: 'persistent',
          //   input: true,
          //   label: 'Persistent',
          //   type: 'radio',
          // },
          {
            key: 'multiple',
            input: true,
            label: 'Multiple Values',
            type: 'checkbox'
          },
          {
            key: 'clearOnHide',
            input: true,
            label: 'Clear Value When Hidden',
            type: 'checkbox'
          },
          {
            key: 'protected',
            input: true,
            label: 'Protected',
            type: 'checkbox'
          },
          {
            key: 'hidden',
            input: true,
            label: 'Hidden',
            type: 'checkbox'
          },
          {
            key: 'mask',
            input: true,
            label: 'Hide Input',
            type: 'checkbox'
          },
          {
            key: 'disabled',
            input: true,
            label: 'Disabled',
            type: 'checkbox'
          },
          {
            key: 'autofocus',
            input: true,
            label: 'Initial Focus',
            type: 'checkbox'
          },
          {
            key: 'tableView',
            input: true,
            label: 'Table View',
            type: 'checkbox'
          },
          {
            key: 'alwaysEnabled',
            input: true,
            label: 'Always Enabled',
            type: 'checkbox'
          }
        ]
      }
    ],
    columns: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    fieldset: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    panel: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    table: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    tabs: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    well: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    hidden: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    container: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    datagrid: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    datamap: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ],
    editgrid: [
      {
        key: 'display',
        label: 'Basic',
        components: [
          {
            key: 'tooltip',
            ignore: true
          }
        ]
      }
    ]
  }
};
