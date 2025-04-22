// Style manager configuration
export const styleManagerConfig = {
  appendTo: '#style-manager',
  sectors: [{
    name: 'Dimension',
    open: false,
    buildProps: [
      'width',
      'height',
      'min-width',
      'min-height',
      'padding',
      'margin',
      'position'
    ]
  }, {
    name: 'Typography',
    open: false,
    buildProps: [
      'font-family',
      'font-size',
      'font-weight',
      'letter-spacing',
      'color',
      'line-height',
      'text-align',
      'text-decoration',
      'font-style',
      'vertical-align',
      'text-shadow'
    ]
  }, {
    name: 'Decorations',
    open: false,
    buildProps: [
      'background-color',
      'border-radius',
      'border',
      'box-shadow',
      'background',
      'gradient'
    ]
  }, {
    name: 'Flex',
    open: false,
    buildProps: [
      'display',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'align-content',
      'order',
      'flex-basis',
      'flex-grow',
      'flex-shrink',
      'align-self'
    ]
  }, {
    name: 'Extra',
    open: false,
    buildProps: [
      'opacity',
      'transition',
      'transform',
      'perspective',
      'transform-style'
    ]
  }]
};
