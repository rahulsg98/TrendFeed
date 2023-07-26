import {Text} from 'react-native';
import { useSearchParams } from "expo-router";
import tweets from '../../../../../assets/data/tweets';
import Tweet from "../../../../../components/Tweet";
import {useQuery} from '@tanstack/react-query';
import {getTweet} from '../../../../../lib/api/tweets';

export default function TweetScreen() {
    const {id} = useSearchParams();

    const {data, isLoading, error} = useQuery({
        queryKey: ['tweet', id],
        queryFn: () => getTweet(id as string),
    });

    if(isLoading){
        return <ActivityIndicator />;
    }

    if(error){
        return <Text>Tweet {id} not found!</Text>
    }

    return <Tweet tweet={data} />  
}