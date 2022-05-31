import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const { data } = useSession();
  const { push } = useRouter();

  async function handleSubscribe(): Promise<boolean> {
    if (!data) {
      signIn('github');
      return;
    }
    if (data.activeSubscription) {
      push('/posts');
    } else {
      try {
        const response = await api.post('/subscribe');
        const { sessionId } = response.data;
        const stripe = await getStripeJS();

        await stripe.redirectToCheckout({ sessionId });
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
