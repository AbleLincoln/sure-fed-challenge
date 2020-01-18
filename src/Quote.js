import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Formats a number with commas
 * @example
 * formatNumber(1000000) // → '100,000'
 */
const formatNumber = num =>
  num
    .toString()
    .split('')
    .reduce(
      (str, curr, i, arr) =>
        i !== 0 && (arr.length - i) % 3 === 0
          ? `${str},${curr}`
          : `${str}${curr}`,
      ''
    )

const Option = ({ option: { title, description, values }, color }) => (
  <div
    className={`flex flex-col bg-${color}-200 mx-0 sm:mx-2 my-2 flex-1 rounded-lg px-4 py-2`}
  >
    <h3
      className={`text-lg text-gray-800 text-center bg-${color}-300 rounded-t-lg -mx-4 -mt-2 mb-2 py-2`}
    >
      {title}
    </h3>
    <p className="flex-1 text-sm text-gray-700 mb-2">{description}</p>

    <div className="relative inline-block w-full">
      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        {values.map(value => (
          <option key={value}>${formatNumber(value)}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
)

Option.propTypes = {
  option: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.number),
  }),
  color: PropTypes.string,
}

const Quote = ({ quote: { variable_options, premium } }) => (
  <div className="bg-white mx-auto px-6 py-4 rounded-lg w-11/12 max-w-2xl shadow-md">
    <h2
      className="text-xl bg-blue-500 -mx-6 -mt-4 px-6 pt-4 pb-2 mb-4 rounded-t-lg text-blue-100"
      style={{
        background: 'linear-gradient(90deg, #255BE4 60%, #1A40A1)',
      }}
    >
      Quote Overview
    </h2>

    {variable_options ? (
      <>
        <div className="flex flex-col sm:flex-row my-4">
          {Object.values(variable_options).map((option, i) => (
            <Option
              key={i}
              option={option}
              color={i % 2 === 0 ? 'yellow' : 'red'}
            />
          ))}
        </div>

        <p className="text-center text-lg text-gray-800 my-2">
          Your annual premium is{' '}
          <strong className="text-green-600">${formatNumber(premium)}</strong>
        </p>
      </>
    ) : (
      <p className="text-center text-lg text-gray-800">
        Please first submit an inquiry{' '}
        <Link to="/" className="text-blue-800 underline">
          here
        </Link>
      </p>
    )}
  </div>
)

Quote.propTypes = {
  quote: PropTypes.shape({
    variable_options: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.number),
      })
    ),
    premium: PropTypes.number,
  }),
}

export default Quote
