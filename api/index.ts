import {gql, GraphQLClient} from 'graphql-request'
import config from '../config'
import {IDonation} from '../helpers/types'

export const getGQLClient = (): GraphQLClient =>
  new GraphQLClient(config.fauna.url, {
    headers: {Authorization: `Bearer ${config.fauna.key}`},
  })

const CREATE_DONATION = gql`
  mutation CreateDonation($input: DonationInput!) {
    createDonation(data: $input) {
      name
      payerId
      emailAddress
      paypalId
      date
      amount
      status
    }
  }
`

const FIND_DONATION = gql`
  query FindDonations($size: Int, $cursor: String) {
    findDonations(_size: $size, _cursor: $cursor) {
      data {
        name
        payerId
        emailAddress
        paypalId
        date
        amount
        status
      }
      after
      before
    }
  }
`

export const createDonation = async (
  donation: IDonation,
): Promise<IDonation> => {
  const result = await getGQLClient().request<{createDonation: IDonation}>(
    CREATE_DONATION,
    {input: donation},
  )

  return result.createDonation
}

export const findDonations = async (
  size = 1000,
  cursor?: string,
): Promise<IDonation[]> => {
  const result = await getGQLClient().request<{
    findDonations: {data: IDonation[]}
  }>(FIND_DONATION, {size, cursor})

  return result.findDonations.data
}
