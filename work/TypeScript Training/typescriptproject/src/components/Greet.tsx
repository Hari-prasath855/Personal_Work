// Using Type
type PersonName = {
    name: {
    firstName: string
    lastName : string
    }
}

// Using Interface
interface GreetProps  {
    name:string
    messageCount?: number
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>Welcome {props.name}!</h1>
        </div>
    )
}

export const Person = (props: PersonName) => {
    return (
        <div>
            <h1>Welcome {props.name.firstName} {props.name.lastName}!</h1>
        </div>
    )
}