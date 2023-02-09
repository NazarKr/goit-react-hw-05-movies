import { Wrapper, Input, Icon } from "./SearchBox.styled";

export const SearchBox = ({ input, onSearchInput, handleSubmit }) => {
    return (
        <Wrapper>
            <Icon />
            <form onSubmit={handleSubmit}>
                <Input
                type="text"
                input={input}
                onChange={onSearchInput}
                placeholder={`Search`}
                />
            </form>
        </Wrapper>
    );
};
