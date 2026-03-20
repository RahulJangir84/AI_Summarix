export default function SourceInfo({source}:{
    source:string;
}) {
    return (
        <div className="flex">
            <h1>Source Info</h1>
            <p>{source}</p>
        </div>
    );
}