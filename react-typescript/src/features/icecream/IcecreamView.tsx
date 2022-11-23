import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
	const numberOfIcecreams = useAppSelector((state) => state.icecream.numberOfIcecreams);
	const dispatch = useAppDispatch();
	return (
		<div>
			<h2>Number of ice creams: {numberOfIcecreams}</h2>
			<button onClick={() => dispatch(ordered(1))}>Order Ice creams</button>
			<button onClick={() => dispatch(restocked(1))}>Restock Ice creams</button>
		</div>
	);
}

export default IcecreamView;
