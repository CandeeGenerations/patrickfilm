import {Dialog, Transition} from '@headlessui/react'
import {CheckCircleIcon, XIcon} from '@heroicons/react/outline'
import React, {Fragment, useState} from 'react'
import {PayPalButton} from 'react-paypal-button-v2'
import {createDonation, findDonations} from '../../api'
import config from '../../config'
import {addCommas} from '../../helpers'
import {siteTitle} from '../../helpers/constants'
import {gtagEvent} from '../../libs/gtag'
import Header from '../typography/Header'
import Content from './Content'
import Input from './Input'
import BarLoader from 'react-spinners/BarLoader'
import {css} from '@emotion/react'

interface IDonateModal {
  open: boolean
  onChange: (open: boolean) => void
}

interface IPageState {
  amount?: string
  error?: string
  total: number
  success: boolean
  loading?: boolean
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const DonateModal = ({open, onChange}: IDonateModal): React.ReactElement => {
  const [pageState, setState] = useState<IPageState>({
    amount: '20',
    success: false,
    loading: true,
    total: 0,
  })

  React.useEffect(() => {
    if (open) {
      const load = async () => {
        const donations = await findDonations()
        let total = 0

        donations.forEach((x) => (total += parseFloat(x.amount)))

        setState({
          amount: '20',
          success: false,
          loading: false,
          error: undefined,
          total,
        })
      }

      load()
    }
  }, [open])

  const calculateProgress = (goal: string, total: number): number =>
    Math.ceil((total / parseFloat(goal)) * 100)

  const goalAchieved = (goal: string, total: number): boolean =>
    total >= parseFloat(goal)

  const logDonation = async (result) => {
    await createDonation({
      amount: result.purchase_units[0].amount.value,
      date: result.create_time,
      name: `${result.payer.name.given_name} ${result.payer.name.surname}`,
      emailAddress: result.payer.email_address,
      payerId: result.payer.payer_id,
      paypalId: result.id,
      status: result.status,
    })
    setState((prevState) => ({
      ...prevState,
      success: true,
      loading: false,
    }))
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={(open) => onChange(open)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-primary-300 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={() => {
                    onChange(false)
                    gtagEvent({
                      action: 'donate_now_modal__close__link',
                      category: 'engagement',
                      label: 'click_event',
                    })
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {pageState.loading ? (
                <div className="my-24">
                  <BarLoader
                    color="#20484f"
                    loading
                    css={override}
                    width={150}
                    height={4}
                  />
                </div>
              ) : pageState.success ? (
                <>
                  <div>
                    <div className="mx-auto flex items-center justify-center h-auto">
                      <img
                        src="/images/logo.svg"
                        alt={siteTitle}
                        className="w-auto"
                        style={{maxWidth: 100}}
                      />
                    </div>

                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title
                        as="h2"
                        className="text-2xl text-center leading-6 font-medium text-secondary-700"
                      >
                        Thank you for your gift!
                      </Dialog.Title>

                      <div className="mt-10">
                        <CheckCircleIcon className="text-green-600 h-32 w-32 mx-auto" />

                        <Content space={false}>
                          <p className="text-green-600">
                            With your gift, we will be able to produce and share
                            this wonderful film about Saint Patrick.
                          </p>
                        </Content>
                      </div>

                      <div className="mt-10 mb-5 text-center">
                        <a
                          className="cursor-pointer"
                          onClick={() => {
                            onChange(false)
                            gtagEvent({
                              action: 'donate_now_modal__success__close__link',
                              category: 'engagement',
                              label: 'click_event',
                            })
                          }}
                        >
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="mx-auto flex items-center justify-center h-auto">
                      <img
                        src="/images/logo.svg"
                        alt={siteTitle}
                        className="w-auto"
                        style={{maxWidth: 100}}
                      />
                    </div>

                    <div className="mt-3 sm:mt-5">
                      <Dialog.Title
                        as="h2"
                        className="text-2xl text-center leading-6 font-medium text-secondary-700"
                      >
                        Give Now
                      </Dialog.Title>

                      <div className="mt-5">
                        <Content space={false}>
                          <p>
                            Thank you for your desire to give to the film Slave
                            to Servant. Your gift of any amount will help make
                            the production of this film a reality and touch the
                            lives of many.
                          </p>
                        </Content>

                        <Header>
                          Goal: ${addCommas(parseFloat(config.donation.goal))}
                        </Header>

                        <div className="flex justify-between mb-1">
                          <span className="text-base font-medium text-primary-700">
                            Amount Raised
                          </span>

                          <span className="text-sm font-medium text-primary-700">
                            ${addCommas(pageState.total)}
                          </span>
                        </div>

                        <div className="w-full h-6 bg-gray-200 rounded-full">
                          <div
                            className="font-medium text-center p-0.5 pt-1 text-white leading-none h-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                            style={{
                              width: goalAchieved(
                                config.donation.goal,
                                pageState.total,
                              )
                                ? '100%'
                                : `${calculateProgress(
                                    config.donation.goal,
                                    pageState.total,
                                  )}%`,
                            }}
                          >
                            {goalAchieved(config.donation.goal, pageState.total)
                              ? 'Goal Achieved!'
                              : calculateProgress(
                                  config.donation.goal,
                                  pageState.total,
                                ) >= 10
                              ? `${calculateProgress(
                                  config.donation.goal,
                                  pageState.total,
                                )}%`
                              : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <div className="mb-10">
                      <Input
                        name="amount"
                        type="money"
                        label="Your gift amount"
                        value={pageState.amount}
                        onChange={(e) =>
                          setState(({total}) => ({
                            amount: e.target.value,
                            error: undefined,
                            success: false,
                            total,
                          }))
                        }
                        onBlur={() => {
                          if (
                            isNaN(parseFloat(pageState.amount)) ||
                            parseFloat(pageState.amount) <= 0
                          ) {
                            setState((prevState) => ({
                              ...prevState,
                              error:
                                'The amount must be similar to 20.00 and greater than 0',
                            }))
                          }
                        }}
                      />

                      {pageState.error && (
                        <p className="mt-2 text-red-600">{pageState.error}</p>
                      )}
                    </div>

                    <PayPalButton
                      amount={
                        isNaN(parseFloat(pageState.amount)) ||
                        parseFloat(pageState.amount) <= 0
                          ? 1
                          : pageState.amount
                      }
                      onSuccess={(result) => {
                        setState((prevState) => ({
                          ...prevState,
                          loading: true,
                        }))
                        logDonation(result)
                      }}
                      style={{layout: 'horizontal', tagline: false}}
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <a
                      className="text-sm cursor-pointer"
                      onClick={() => {
                        onChange(false)
                        gtagEvent({
                          action: 'donate_now_modal__never_mind_link__link',
                          category: 'engagement',
                          label: 'click_event',
                        })
                      }}
                    >
                      Never mind
                    </a>
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DonateModal
