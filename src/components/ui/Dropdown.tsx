import { useState } from 'react';

interface IDropdownProps {
    title: string
    items: string[]
}

export const Dropdown = ({ title, items }: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

