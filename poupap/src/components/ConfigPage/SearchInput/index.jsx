import { IconSearch } from "../../PrincipalPage/Icons"

export const SearchInput = (props) => {
    return (
        <div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
            <IconSearch />
            <input 
                className="w-full text-neutral-text text-[20px] leading-[125%]"
                {...props}
                placeholder="Pesquise seu dinheiro"
            />
        </div>
    )
}