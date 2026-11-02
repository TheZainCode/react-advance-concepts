import Card from "../components/Card";
function CompositionDemo(){
    return(
        <div className="grid gap-4 p-6 md:grid-cols-2">
            <Card title="Profile">
                <h3 className="text-xl text-blue-600 font-bold">Zain</h3>
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