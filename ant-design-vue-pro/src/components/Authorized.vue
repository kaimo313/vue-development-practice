<script>
import { check } from '../utils/auth';
export default {
    functional: true,
    props: {
        authority: {
            required: true,
            type: Array
        },
    },
    render(h, context) {
        const { props, scopedSlots } = context;
        return check(props.authority) ? scopedSlots.default() : null;
    }
}
</script>