export default function ListadoError({error}){

    return (
        <>
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        </>
    );

}