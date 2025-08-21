import React from "react";
import { Button, Card } from "react-bootstrap";

export default function VideoCard({ title, year, description, videoSrc }) {
    return (
        <Card className="shadow-lg p-3 mb-5 bg-body rounded ">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                {videoSrc && (
                    <video
                        src={videoSrc}
                        controls
                        width="100%"
                        height="100%"
                        style={{ borderRadius: "8px", marginTop: "10px" }}
                    />
                )}
                <Card.Text>
                    Projet realisé en React Django qui pour objectif de faire Une authentification et crud sur les produits commandes founisseur etc..
                    <br /><br />

                    <Button className='btn' href='https://github.com/nniang/sendev_project' target='_blank'>voir le projet en ligne</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
