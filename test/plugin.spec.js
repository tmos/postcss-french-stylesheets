import postcss from 'postcss'
import expect from 'expect'
import plugin from '../src'
import properties from '../src/properties'
import values from '../src/values'

function run(input, output, opts, done) {
  return postcss([plugin(opts)])
    .process(input)
    .then((result) => {
      expect(result.css).toEqual(output)
      expect(result.warnings().length).toEqual(0)
      done()
    }).catch((error) => {
      done(error)
    })
}

function propertyTest(french, english, value = 'french') {
  it(`converts ${french} to ${english}`, (done) => {
    run(
      `a{ ${french}: ${value}; }`,
      `a{ ${english}: ${value}; }`,
      {},
      done
    )
  })
}

function valueTest(french, english, property = 'french') {
  it(`converts ${french} to ${english}`, (done) => {
    run(
      `a{ ${property}: ${french}; }`,
      `a{ ${property}: ${english}; }`,
      {},
      done
    )
  })
}

describe('postcss-french-stylesheets', () => {
  // Test Properties
  Object.keys(properties).forEach((property) => propertyTest(properties[property], property))

  // Test Values
  Object.keys(values).forEach((value) => valueTest(values[value], value))

  // Test important
  it('converts !prioritaire to !important', (done) => {
    run(
      'a{ color: white !prioritaire; }',
      'a{ color: white !important; }',
      {},
      done
    )
  })
})
