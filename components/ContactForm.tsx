import { FiMessageCircle, FiCheckCircle } from 'react-icons/fi'

const ContactForm = () => {
  return (
    <div className="bg-primary-50 border-2 border-primary-600 rounded-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <FiMessageCircle className="text-4xl text-primary-600" />
        <h3 className="text-2xl font-bold text-secondary-900">Text Us for a Free Quote</h3>
      </div>

      <p className="text-lg text-secondary-700 mb-6">
        We are often out in the field installing sod. For the fastest service, please text us! We respond to texts much quicker than voicemails.
      </p>

      <div className="bg-white rounded-lg p-6 mb-6">
        <p className="font-bold text-secondary-900 mb-4 text-lg">Text this information to:</p>
        <a
          href="sms:9049011457"
          className="text-3xl font-bold text-primary-600 hover:text-primary-700 block mb-6"
        >
          (904) 901-1457
        </a>

        <p className="font-bold text-secondary-900 mb-3">Please include:</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700"><strong>Your name</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700"><strong>Your phone number</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700"><strong>Your property address</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700"><strong>Which area(s) of your yard</strong> you want an estimate for (front yard, back yard, both, etc.)</span>
          </li>
        </ul>
      </div>

      <div className="bg-primary-600 text-white rounded-lg p-4 text-center">
        <p className="font-semibold">We typically respond within 1-2 hours during business hours!</p>
      </div>
    </div>
  )
}

export default ContactForm
