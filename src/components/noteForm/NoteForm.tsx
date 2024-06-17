import { useRef, useState } from "react";
import { Col, Form, Row, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../../constants/types";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export default function NoteFrom({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      title: titleRef.current!.value,
      body: markdownRef.current!.value,
      tags: selectedTags,
    });
    onSubmit({
      title: titleRef.current!.value,
      body: markdownRef.current!.value,
      tags: selectedTags,
    });
  };

  const handleTagsChange: (tags: MultiValue<Tag>[]) => void = (tags) => {
    console.log({ tags });
    setSelectedTags(
      tags.map((tag) => ({
        id: tag.value,
        label: tag.label,
      }))
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreateableReactSelect
                value={selectedTags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                onChange={handleTagsChange}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control ref={markdownRef} as="textarea" rows={15} />
            </Form.Group>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
