import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ onSubmit }) => {
  const [loading, setLoading] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [address, setAddress] = React.useState({
    line_1: '',
    line_2: '',
    city: '',
    region: '',
    postal: '',
  })

  const handleAddressChange = e =>
    setAddress({ ...address, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    onSubmit({
      first_name: firstName,
      last_name: lastName,
      address,
    })
  }

  return (
    <div className="bg-white mx-auto px-6 py-4 rounded-lg w-11/12 max-w-xl shadow-md">
      <h2
        className="text-xl bg-blue-500 -mx-6 -mt-4 px-6 pt-4 pb-2 mb-4 rounded-t-lg text-blue-100"
        style={{
          background: 'linear-gradient(90deg, #255BE4 60%, #1A40A1)',
        }}
      >
        Rating Information
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label className="flex-1 text-gray-800">
            First name
            <input
              type="text"
              className="w-11/12"
              placeholder="John"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </label>

          <label className="flex-1 text-gray-800">
            Last name
            <input
              type="text"
              className="w-full"
              placeholder="Doe"
              required
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </label>
        </div>

        <label className="form-group flex flex-wrap justify-between flex-1 text-gray-800 mt-4">
          Address
          <input
            type="text"
            className="w-full"
            placeholder="Line 1"
            name="line_1"
            required
            value={address.line1}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            className="w-full"
            placeholder="Line 2"
            name="line_2"
            value={address.line2}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            className="w-full"
            placeholder="City"
            name="city"
            required
            value={address.city}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            className="w-4/12"
            placeholder="Region"
            name="region"
            required
            value={address.region}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            className="w-7/12"
            placeholder="Postal"
            name="postal"
            pattern="[0-9]{5}"
            title="Zip code must be 5 digits."
            required
            value={address.postal}
            onChange={handleAddressChange}
          />
        </label>

        <button
          type="submit"
          className="block w-full mt-6 px-4 py-2 text-blue-100 rounded shadow"
          style={{ backgroundColor: '#2A60E1' }}
        >
          {loading ? 'Calculating...' : 'View quotes →'}
        </button>
      </form>
    </div>
  )
}

Rating.propTypes = {
  onSubmit: PropTypes.func,
}

export default Rating
