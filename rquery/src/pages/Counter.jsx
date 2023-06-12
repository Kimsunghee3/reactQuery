import React from 'react';
import { useQuery, useMutation, QueryClient} from 'react-query';

const queryClient = new QueryClient();

export const Counter = () => {
const { data = 0 } = useQuery('counter');

const increaseMutation = useMutation(() => {
queryClient.setQueryData('counter', data + 1);
});

const decreaseMutation = useMutation(() => {
queryClient.setQueryData('counter', data - 1);
});

return (
<div>
    <div>Counter: {data}</div>
    <button onClick={increaseMutation.mutate}>Increase</button>
    <button onClick={decreaseMutation.mutate}>Decrease</button>
</div>
);
};

