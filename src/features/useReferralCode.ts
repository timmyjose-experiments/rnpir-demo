import { useEffect, useState } from 'react'
import { PlayInstallReferrer } from 'react-native-play-install-referrer'

const useReferralCode = () => {
  const [referrerInfo, setReferrerInfo] = useState<any | null>(null)
  const [referrerError, setReferrerError] = useState<any | null>(null)

  useEffect(() => {
    try {
      PlayInstallReferrer.getInstallReferrerInfo((info, err) => {
        if (err) {
          setReferrerError(err)
        } else {
          if (__DEV__) {
            console.log(`Got referrerInfo: ${JSON.stringify(info, null, 2)}`)
          }
          setReferrerInfo(info)
        }
      })
    } catch (err: any) {
      setReferrerError(err)
    }
  }, [])

  return {
    referrerInfo, 
    referrerError
  }
}

export default useReferralCode