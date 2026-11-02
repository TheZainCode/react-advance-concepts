import Card from "./Card";
function CompositionDemo(){
    return(
        <div className="grid gap-4 p-6 md:grid-cols-2">
            <Card title="Profile" footer={<button>Edit Profile</button>}>
            <p>Name: Zain</p>
            <p>Role: Frontend Developer</p>
            </Card>
            <Card title="Skills">
                <p>React</p>
                <p>JavaScript</p>
                <p>Tailwind CSS</p>
            </Card>
        </div>
    )
}
export default CompositionDemo;