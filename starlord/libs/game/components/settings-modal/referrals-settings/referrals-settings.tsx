import { useClipboard } from '@chakra-ui/react';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';

import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Spinner,
  Tooltip,
} from '@todocity/ui/core';
import { Box, Button, Text } from '@todocity/ui/core';

import { db } from '../../../../firebase/client-app';
import { getAppUrl } from '../../../../utils/global/get-app-url';

function ReferralLinkInput({ code }) {
  const { hasCopied, onCopy } = useClipboard(code);
  return (
    <Flex gap="2">
      <Input value={code} contentEditable={false} />
      <Button variant="solid" size="sm" onClick={onCopy}>
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
    </Flex>
  );
}

export function ReferralsSettings() {
  const currentUser = getAuth().currentUser;
  const userRef = doc(db, 'users', currentUser.uid);

  const referralCodeQuery = useQuery(
    'userReferral',
    () => {
      return getDoc(userRef).then((snap) => {
        if (snap.exists()) {
          return snap.data();
        } else {
          return null;
        }
      });
    },
    {
      // Can put serializers and shit here if needed
      select(data) {
        return {
          code: `${getAppUrl()}/referrals/${data.referralCode}`,
          inviteCount: data.referrals?.length || 0,
        };
      },
    }
  );

  return (
    <Box>
      <Text pb="6" variant="h3" fontWeight="bold">
        Referrals
      </Text>
      {referralCodeQuery.isLoading && <Spinner />}
      {!referralCodeQuery.isLoading && !referralCodeQuery.error && (
        <Box>
          <Text>
            <b>
              <u>For each person</u>
            </b>{' '}
            that signs up using your referral code you&apos;ll both get{' '}
            <b>
              <u>1 month of free TodoCity</u>
            </b>
            . There&apos;s no limit to the free months you can get.
          </Text>
          <Divider my="4" />
          <FormControl>
            <FormLabel>Your referral link:</FormLabel>
            <ReferralLinkInput code={referralCodeQuery.data.code} />
          </FormControl>
          <Box my="4">
            <Flex gap="2">
              <Tooltip hasArrow label="Share to Facebook">
                <IconButton
                  variant="solid"
                  size="md"
                  colorScheme="facebook"
                  icon={<IconBrandFacebook />}
                  aria-label="facebook logo"
                />
              </Tooltip>
              <Tooltip hasArrow label="Share to Twitter">
                <IconButton
                  variant="solid"
                  size="md"
                  colorScheme="twitter"
                  icon={<IconBrandTwitter />}
                  aria-label="twitter logo"
                />
              </Tooltip>
              <Tooltip hasArrow label="Share to Linkedin">
                <IconButton
                  variant="solid"
                  size="md"
                  colorScheme="linkedin"
                  icon={<IconBrandLinkedin />}
                  aria-label="twitter logo"
                />
              </Tooltip>
            </Flex>
          </Box>
          <Divider my="4" />
          <Box pb="8">
            <Text fontWeight="semibold" mb="4">
              TodoCity referral count:
            </Text>
            <Text>
              Total referral signups:{' '}
              <b>{referralCodeQuery.data.inviteCount}</b>
            </Text>
            <Text>
              Free months accrued: <b>{referralCodeQuery.data.inviteCount}</b>
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
}
